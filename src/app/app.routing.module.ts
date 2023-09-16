import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import { DashBoardComponent } from "./shared/components/dash-board/dash-board.component";
import { EditAddpostComponent } from "./shared/components/edit-addpost/edit-addpost.component";

const routes:Routes=[
    {
        path : "" , component : DashBoardComponent
    },
    {
        path : "posts" ,component : DashBoardComponent
    },
    {
        path : "addPost" , component : EditAddpostComponent
    },
    {
        path : "posts/:postId" , component : EditAddpostComponent
    }
]

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule {

}