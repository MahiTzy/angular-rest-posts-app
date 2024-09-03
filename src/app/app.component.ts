import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterOutlet } from '@angular/router';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostsLoaderServiceService } from './service/posts-loader-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    PostCardComponent,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  hasPosts: boolean = false;

  posts: any = [];
  constructor(private _postService: PostsLoaderServiceService, private _snack:MatSnackBar) {}

//   ngOnInit() {
//     this._postService.getPosts().subscribe(
//       (data) => {
//         // console.log(data);
//         this.posts = data;
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   }

  fetchPosts() {
    this._postService.getPosts().subscribe(
      (data) => {
        // console.log(data);
        this.posts = data;
        this.hasPosts = true;
        this._snack.open('Posts Loaded Successfully', 'Close', {
          duration: 2000,
          verticalPosition: 'top',
        });

      },
      (error) => {
        console.log(error);
        this._snack.open('Error in Loading Posts', 'Close', {
          duration: 2000,
          verticalPosition: 'top',
        });
      }
    );
  }
}
