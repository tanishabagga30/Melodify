import React, { useState } from "react";


const Comments = () => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [commentsList, setCommentsList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() && comment.trim()) {
            const newComment = { id: Date.now(), name, text: comment };
            setCommentsList([...commentsList, newComment]); // Update comment list
            setName(""); // Clear input
            setComment("");
        }
    };

    return (
        <div className="comments-container">
            <h3>Comments & Reviews</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Write a comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                ></textarea>
                <button type="submit">Post Comment</button>
            </form>

            <div className="comments-list">
                {commentsList.length > 0 ? (
                    commentsList.map((c) => (
                        <div key={c.id} className="comment">
                            <strong>{c.name}</strong>
                            <p>{c.text}</p>
                        </div>
                    ))
                ) : (
                    <p>No comments yet. Be the first to comment!</p>
                )}
            </div>
        </div>
    );
};

export default Comments;
