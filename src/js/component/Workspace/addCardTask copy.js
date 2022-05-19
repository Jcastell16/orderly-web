import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

export const AddCardTask = () => {
    const [cardlist, setCardlist] = useState([]);
    const DivItem = () => {
        return (
            <div className="card border-secondary mb-3" style={{ "maxWidth": "15rem" }}>
                <div className="card-header d-flex justify-content-between pb-3">
                    <h5 className="card-title">Title Task</h5>
                    <button type="button" class="btn btn-outline-dark border-0" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <i className="fas fa-pencil-alt"></i>
                    </button>
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-success">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body text-secondary">
                    <h5 className="card-title">Content Task</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="card-footer">Members - Date</div>
            </div>
        )
        //<div className="sortable-item card-body rounded bg-white shadow-2 mb-2">Item 1</div>;
    };
    const handleAddTask = event => {
        setCardlist(cardlist.concat(<DivItem key={cardlist.length} />));
    };
    return (
        <>
            <main style={{ "height": "100vh", }}>
                <div>
                    <section className="d-flex align-items-start h-100" data-perfect-scrollbar="true" style={{ "position": "relative" }} data-sortable="sortable">
                        <div className="card shadow-1-strong m-1 p-3 bg-light" style={{ "maxWidth": "20rem" }}>
                            <div className="card-header d-flex justify-content-between pl-1 pr-0 pb-3 border-0 bg-light">
                                <h5 className="me-3"><strong>Backlog</strong></h5>
                                    <button type="button" className="btn btn-outline-dark m-0 py-0 px-2 border-0" data-ripple-color="dark">
                                        <i className="fas fa-ellipsis-h"></i>
                                    </button>
                            </div>
                            <div data-sortable="sortable">
                                {cardlist}
                            </div>
                            <div className="card-footer border-0 pt-0 d-grid gap-2 bg-light text-center">
                                <button type="button" className="btn btn-outline-dark border-0" data-ripple-color="dark" onClick={handleAddTask}>
                                    <i className="fas fa-plus me-2"></i>
                                    <label>Add task</label>
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
};