/**
 *  Implement the nested comment box.
 * 
 *    Requirements:
 *      - adding a comment from input field when you are clikcing over the  add comment button.
 * 
 *      - then we need to create a dynamic comment list with some border  and will contain the text and a reply btn.
 * 
 *      - when you click on the reply btn , then again a comment input field and a button has to appear.
 * 
 *   Approach:
 *     - attaching the event on input and add comment button
 *     - create dynamic the comment as text with reply button.
 *     - if user want to reply then input filed needs to create with add button for replying any comment.
 */


class NestedCommentBox {
    constructor() {
        this.commmentInput = document.getElementById('commentInput');
        this.addCommentBtn = document.getElementById('addCommentBtn');

        this.commentList = document.getElementById('commentList');

        this.bindEvents();
    }

    bindEvents() {
        this.addCommentBtn.addEventListener('click', ()=>{this.addComment()})
    }

    addComment() {
        const inputText = this.commmentInput.value.trim();
        console.log(inputText.length);

        if(inputText && inputText.length){
            const newComment = this.createComment(inputText);
            this.commentList.appendChild(newComment);
            this.commmentInput.value = '';
        }
    }

    createComment(text) {
      const li = document.createElement('li');
      const commentPElem = this.createTextElement(text);
      
      console.log(commentPElem);
      li.appendChild(commentPElem);

      const replyBtn = this.createReplyBtn();
      li.appendChild(replyBtn);
      replyBtn.addEventListener('click', ()=>{ this.showReplyInput(li) })

      const replyCont = this.createReplyContainer();
      li.appendChild(replyCont);

      return li;
    }

    createTextElement(text) {
        const pElem = document.createElement('p');
        pElem.textContent = text;

        return pElem;
    }

    createReplyBtn() {
        const replyBtn = document.createElement('button');
        replyBtn.className = 'replyBtn';
        replyBtn.textContent = 'Reply';

        return replyBtn;
    }

    showReplyInput(li) {
        console.log(li);

        const replyCont = li.querySelector('.reply-container');

        const replyInputWrapper = this.createReplyInputWrapper();
        const replyInput = this.createReplyInput();

        // reply add button need to work upon;
        const addReplyBtn = this.createAddReplyBtn(replyCont, replyInput);

        replyInputWrapper.appendChild(replyInput);
        replyInputWrapper.appendChild(addReplyBtn);
        replyCont.appendChild(replyInputWrapper);
    }

    createReplyContainer(){
        const replyCont = document.createElement('div');
        replyCont.className = 'reply-container';

        return replyCont;
    }

    createReplyInputWrapper() {
        const divElem = document.createElement('div');
        divElem.className = 'reply-input-wrapper';

        return divElem;
    }

    createReplyInput() {
        const inputElem = document.createElement('input');
        inputElem.className = 'reply-input';

        return inputElem;
    }

    createAddReplyBtn(replyCont, replyInput) {
        const addReplyBtn = document.createElement('button');
        addReplyBtn.textContent = 'Add Reply';

        addReplyBtn.addEventListener('click', ()=>{
           this.addReply(replyCont, replyInput);
        });

        return addReplyBtn;
    }

    addReply(replyCont, replyInput) {
       console.log('Replied');
       const replyText = replyInput.value.trim();

       if(replyText && replyText.length) {
        const replyLi = this.createComment(replyText);

        replyCont.appendChild(replyLi);

       }
    }
}

new NestedCommentBox();