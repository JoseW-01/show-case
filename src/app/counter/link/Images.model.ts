export class Images {
    title: string;
    imageURL: string 
    votes: number;

    constructor(title: string , imageURL: string, votes?: number){

        this.title = title,
        this.imageURL = imageURL,
        this.votes = votes || 0 
    }
    voteUp(){
        this.votes++;
    }
    voteDown(){
        this.votes--;
    }
}
