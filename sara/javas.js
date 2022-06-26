const CommentForm = document.getElementById("CommentForm");
const CommentsContainer = document.querySelector(".Comments");
const nameInput = CommentForm["name"];
const EmailInput = CommentForm["email"];
const CommentInput = CommentForm["comment"];

//create array
const Comments = JSON.parse(localStorage.getItem("Comments")) || [];


const addComment = (name, email, comment) => {
 
    Comments.push({
        name,
        email,
        comment
    });

    localStorage.setItem("Comments", JSON.stringify(Comments));
    return { name, email, comment };
};

const CreateCommentElement = ({ name, email, comment }) => {
    const CommentDiv = document.createElement("div");
 
    const nameComment = document.createElement("p");
    const emailComment = document.createElement("p");
    const commentcomment = document.createElement("h3");
 
    nameComment.innerText = "User Name: " + name;
    emailComment.innerText = "User Email: " + email;
    commentcomment.innerText = comment;
 
    CommentDiv.append(nameComment, emailComment, commentcomment);



    CommentsContainer.appendChild(CommentDiv);

    CommentsContainer.style.display = Comments.length === 0 ? "none" : "flex";

};
CommentsContainer.style.display = Comments.length === 0 ? "none" : "flex";
Comments.forEach(CreateCommentElement);
CommentForm.onsubmit = (e) => {
    e.preventDefault();
    const NewComment = addComment(nameInput.value, EmailInput.value, CommentInput.value);
    CreateCommentElement(NewComment);
    nameInput.value = "";
    EmailInput.value = "";
    CommentInput.value = "";
  
}