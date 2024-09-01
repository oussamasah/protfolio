import React, { useEffect, useState } from 'react'
import "./Comments.css"
import { Button, Modal } from "flowbite-react";
import Avatar from 'react-avatar';
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { addComment, DeleteComment, getAllPosts, GetCommentsByPost, UpdateComment } from '../../../utils/graphql'
export default function Comments({ entry }) {
	const [commentsList, setCommentsList] = useState([])
	const [editComment, setEditComment] = useState(null)
	const [openModal, setOpenModal] = useState(false);
	const [Subscription, setSubscription] = useState({ name: "", email: "" })
	const [isSubcribe, setIsSubscribe] = useState(false)
	const setLocalstorageSubscription = (e) => {
		e.preventDefault()
		if (Subscription.name != "" && Subscription.email != "") {
			localStorage.setItem("subscription", JSON.stringify(Subscription))
			setIsSubscribe(true)

		}
	}

	useEffect(() => {
		async function getcomments() {
			setCommentsList(await GetCommentsByPost(entry.databaseId))
		}
		if (typeof window != "undefined") {
			let session = localStorage.getItem("subscription");
			if (session) {
				setIsSubscribe(true)
				setSubscription(JSON.parse(session))
				getcomments()
			}
		}
		
		typeof window != "undefined" ? document.querySelectorAll(".postreplycommentForm").forEach(el => el.classList.add("hidden")):""

	}, [])

	const formatDate = (dateString) => {
		const date = new Date(dateString);
		return new Intl.DateTimeFormat('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric',
			hour: 'numeric',  // Hour (e.g., 10)
			minute: 'numeric', // Minute (e.g., 30)
			hour12: true      // 12-hour format (AM/PM)
		}).format(date);
	};
	const ShowForm = (cls) => {

		typeof window != "undefined" ? document.querySelectorAll(".postreplycommentForm").forEach(el => el.classList.add("hidden")):null
		typeof window != "undefined" ? document.querySelector("." + cls).classList.remove("hidden"):null
	}
	const sendComment = async (event) => {
		event.preventDefault(); // Prevent the default form submission

		// Create a FormData object from the form element
		const formData = new FormData(event.target);

		// Convert FormData to an object
		const data = Object.fromEntries(formData.entries());
		if (data.comment.length > 0) {

			let input = {
				content: data.comment,
				authorName: Subscription.name,
				authorEmail: Subscription.email,
				parent: parseInt(data.parentId)
			}

			if (data.id && data.id != null) {
				await UpdateComment(data.id,input)

			} else {
				await addComment(data.postId, input)

			}
			let cmnts =await GetCommentsByPost(data.postId)
			setCommentsList(cmnts)
			ShowForm("none")
			setEditComment(null)

		}

	}
	const DeleteComments = async (id)=>{

		await DeleteComment(id)
		let cmnts =await GetCommentsByPost(entry.databaseId)
		setCommentsList(cmnts)
	
	}

// Function to strip HTML tags from a string
const stripHTML = (htmlString) => {
	const doc = new DOMParser().parseFromString(htmlString, 'text/html');
	return doc.body.textContent || "";
  };
  useEffect(() => {

  }, [entry,editComment	])
  

	return (
		<div>

			{!isSubcribe ?
				<div id="subscriptionFormContainer" className={`relative my-10 mx-20 `}>
					<h2 className="text-2xl font-bold mb-4 text-center">Subscribe to Comment</h2>
					<form id="subscribeForm" className="" onSubmit={(e) => setLocalstorageSubscription(e)}>
						<div className="grid grid-cols-3 gap-3 ">
							<div>
								<label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white">Name</label>
								<input type="text" onChange={(e) => setSubscription({ ...Subscription, name: e.target.value })} id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
							</div>
							<div>
								<label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white">Email</label>
								<input type="email" id="email" onChange={(e) => setSubscription({ ...Subscription, email: e.target.value })} name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
							</div>
							<button type="submit" disabled={(Subscription.name == "" || Subscription.email == "")} className="rounded-full bg-blue-500 text-white  disabled:bg-slate-500  hover:bg-blue-600 mt-5" >Subscribe</button>

						</div>
					</form>
				</div>
				:

				<section id="commentSection" className={`bg-white dark:bg-[#090b11] py-8 lg:py-16 antialiased `}>
					<div className="max-w-2xl mx-auto px-4">
						<div className="flex justify-between items-center mb-6">
							<h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Discussion ({commentsList.length})</h2>
						</div>
						<form className="mb-6 postcommentForm addcommentform" onSubmit={sendComment}>
							<input type="hidden" name="postId" id="postId" value={entry.databaseId} />
							<div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
								<label htmlFor="comment" className="sr-only">Your comment</label>
								<textarea id="comment" name="comment" rows="6"
									className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
									placeholder="Write a comment..." required></textarea>
							</div>
							<button type="submit"
								className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
								Post comment
							</button>
						</form>


					</div>
				</section>}


			{commentsList && commentsList?.filter(c => c.parentId == null).map((c, key) =>
				<div key={c.databaseId + "-" + key}>
					<article className="p-6 text-base bg-slate-100 rounded-lg dark:bg-gray-900 mb-2">
						<footer className="flex justify-between items-center mb-2">
							<div className="flex items-center">
								<p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold"><Avatar name={c.author.node.name} size="40" round="50%" className='mr-3' />{c.author.node.name}</p>
								<p className="text-sm text-gray-600 dark:text-gray-400"><time dateTime={c.date}
									title="February 8th, 2022">{formatDate(c.date)}</time></p>
							</div>
							<div className='actions'>
								<button onClick={(e) => [setEditComment(c), ShowForm(`form-reply-${c.databaseId}`)]}
																			className="inline-flex items-center p-2 mr-3 text-sm font-medium text-center bg-purple-900 text-white rounded hover:bg-purple-950"
																			type="button">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
									</svg>

									<span className="sr-only">Comment settings</span>
								</button>
								<button onClick={(e) => [setOpenModal(true),setEditComment(c)]}

className="inline-flex items-center p-2  text-sm font-medium text-center bg-purple-900 text-white rounded hover:bg-purple-950"
type="button">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
									</svg>


									<span className="sr-only">Comment settings</span>
								</button>
							</div>

						</footer>
						<p className="text-dark dark:text-white" dangerouslySetInnerHTML={{ __html: c.content }}></p>
						<div className="flex items-center mt-4 space-x-4">
							<button type="button"
								onClick={(e) => [setEditComment(null), ShowForm(`form-reply-${c.databaseId}`)]}

								className="reply flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">
								<svg className="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
									<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
								</svg>
								Reply
							</button>
						</div>
						<form
							className={`my-5  postreplycommentForm addcommentform hidden form-reply-${c.databaseId}`}
							onSubmit={sendComment}
						>
							<input type="hidden" name="postId" id="postId" value={entry.databaseId} />
							<input type="hidden" name="parentId" id="parentId" value={c.databaseId} />
							<input type="hidden" name="commentId" id="commentId" value={c.databaseId} />
							<input type="hidden" name="id" id="id" value={editComment?c.id:null} />
							<div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
								<label htmlFor="comment" className="sr-only">Your reply</label>
								<textarea id="comment" name="comment" rows="2"
									className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
									placeholder="Write a comment..." required defaultValue={editComment?stripHTML(editComment.content):""}></textarea>
							</div>
							<button type="submit"

								className="inline-flex items-center py-1 px-2 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
								Reply comment
							</button>
						</form>
					</article>


					{c.replies.nodes.map((r, key) => <div key={r.databaseId + "-" + key}>
						<article className="p-6 mb-3 ml-6 lg:ml-12 text-base bg-slate-100 rounded-lg dark:bg-gray-900" >
							<footer className="flex justify-between items-center mb-2">
								<div className="flex items-center">
									<p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
										<img className="mr-2 w-6 h-6 rounded-full"
											src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
											alt={r.author.node.name} />
										{r.author.node.name}
									</p>
									<p className="text-sm text-gray-600 dark:text-gray-400">
										<time dateTime={r.date} title={formatDate(r.date)}>{formatDate(r.date)}</time>
									</p>
								</div>
								<div className='actions '>
									<button onClick={(e) => [setEditComment(r), ShowForm(`subform-reply-${r.databaseId}`)]}
										className="inline-flex items-center p-2 mr-3 text-sm font-medium text-center bg-purple-900 text-white rounded hover:bg-purple-950"
										type="button">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
											<path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
										</svg>

										<span className="sr-only">Comment settings</span>
									</button>
									<button onClick={(e) => [setOpenModal(true),setEditComment(r)]}

className="inline-flex items-center p-2  text-sm font-medium text-center bg-purple-900 text-white rounded hover:bg-purple-950"
type="button">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
											<path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
										</svg>


										<span className="sr-only">Comment settings</span>
									</button>
								</div>
							</footer>
							<p className="text-gray-500 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: r.content }}></p>
							<div className="flex items-center mt-4 space-x-4">
								<button type="button"
									onClick={(e) => [setEditComment(null), ShowForm(`form-reply-${c.databaseId}`)]}

									className="reply flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">
									<svg className="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
										<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
									</svg>
									Reply
								</button>
							</div>

						</article>
						<form
							onSubmit={sendComment}
							className={`my-5 postreplycommentForm addcommentform hidden subform-reply-${r.databaseId}`}
						>
							<input type="hidden" name="postId" id="postId" value={entry.databaseId} />
							<input type="hidden" name="parentId" id="parentId" value={c.databaseId} />
							<input type="hidden" name="commentId" id="commentId" value={r.databaseId} />
							<input type="hidden" name="id" id="id" value={editComment?r.id:null} />

							<div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
								<label htmlFor="comment" className="sr-only">Your reply</label>
								<textarea id="comment" name="comment" rows="2"
									className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
									placeholder="Write a comment..." required defaultValue={editComment?stripHTML(editComment.content):""}></textarea>
							</div>
							<button type="submit"
								className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
								Reply comment

							</button>
						</form>
					</div>)}
				</div>
			)}


<Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
		
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={(e) => [setEditComment(null), DeleteComments(editComment.id),setOpenModal(false)]}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
		</div>

	)
}



