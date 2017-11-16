import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import {PostService} from '../services/post/post.service';

@Component({
  selector: 'dashboard',
  providers: [PostService],
  templateUrl: './home.component.html'
})
export class HomeComponent  {
	file: File;
	img_preivew: any;
	image_preview_show: boolean;
	postCaption: string;
	postArray: any;
	createPostDiv: boolean;
	is_image: boolean;
	post_hid_img: any;
	noPostFound: boolean;
	postCommentText: any;
	constructor(private sanitizer: DomSanitizer, private _service:PostService) {}

	ngOnInit() {
		let access_token = JSON.parse(localStorage.getItem("access_token"));
		this._service.get_post(access_token).subscribe(
			data => {
				console.log(data);
				if ( data.status == 200 ) {
					let postData = data.response;
					// for( let i=0; i<data.length; i++ ) {
					// 	postData[i].post_image = this.sanitizer.bypassSecurityTrustStyle(`postData[i].post_image`);
					// }
					if ( postData.length > 0 ) {
						this.noPostFound = false;
						this.postArray = postData;
					} else {
						this.noPostFound = true;
					}
				}
			},
			error => {
				console.log(error);
			}
		);
	}

	onChangePostImage(event: EventTarget) {
		let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
		let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
		let files: FileList = target.files;
		this.file = files[0];
		console.log(this.file);
		this.img_preivew = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.file));
		this.image_preview_show = true;
		this.is_image = true;
		this.post_hid_img = this.file;
	}

	closeCreatePostImage() {
		this.is_image = false;
		this.img_preivew = "";
		this.image_preview_show = false;
	}

	createPost() {
		let access_token = JSON.parse(localStorage.getItem("access_token"));
		let userData = JSON.parse(localStorage.getItem("user"));

		if ( this.postCaption == undefined ) {
			this.postCaption = '';
		}
		
		if (this.postCaption != '' || this.is_image == true) {	
			console.log(this.post_hid_img);		
			let formData = new FormData();
			formData.append("post_caption", this.postCaption);
			formData.append("post_image", this.post_hid_img);
			formData.append("access_token", access_token); 
			this._service.create_post(formData).subscribe(
				data => {
					console.log(data);
					this.ngOnInit();
					this.closeCreatePostImage();
					this.postCaption = '';
					this.post_hid_img = '';
					this.is_image = false;
					this.createPostDiv = true;
					setTimeout(()=>{
						this.createPostDiv = false;
					},3000);
				},
				error => {
					console.log(error);
				}
			);
		} else {
			return false;
		}
	}
	
	// user_access_token: string;
	setLikePost($event: any, $post_details: any, $user_access_token: any) {
		
		let access_token = JSON.parse(localStorage.getItem("access_token"));
		// console.log("access_token"+access_token);
		if ( access_token == $user_access_token ) {
			this._service.post_like(access_token, $post_details.post_id, $post_details.is_liked_by_me).subscribe(
				data => {
					// console.log(data);	
					if ( data.status == 200 ) {	
						$post_details.is_liked_by_me = data.response.is_liked_by_me;
					}
				},
				error => {
					console.log(error);
				}
			);
		} else {
			$post_details.is_liked_by_me = 0;
		}

	}

	createComment (event: any, $post_details: any, $user_access_token: any) {
		if(event.keyCode == 13) {
			let commentMsg = event.target.value;
			console.log(commentMsg);
			if ( commentMsg != undefined || commentMsg != "" ) {
				let access_token = JSON.parse(localStorage.getItem("access_token"));
				this._service.post_comment(access_token, $post_details.post_id, commentMsg).subscribe(
					data => {
						console.log(data);	
						if ( data.status == 200 ) {	
							// $post_details.is_liked_by_me = data.response.is_liked_by_me;
							$post_details.post_comment.push(data.response);
							event.target.value = '';
						}
					},
					error => {
						console.log(error);
					}
				);
			}
		}
	}
}
