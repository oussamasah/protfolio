/* empty css                                       */
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, u as unescapeHTML, b as addAttribute } from '../../../chunks/astro/server_CkECM0Ri.mjs';
import 'kleur/colors';
import { G as GetCommentsByPost, U as UpdateComment, b as addComment, D as DeleteComment, a as $$BaseLayout, g as getAllPosts, c as $$Icon, $ as $$Hero } from '../../../chunks/BaseLayout_Cy-1LoML.mjs';
import { $ as $$ContactCTA } from '../../../chunks/ContactCTA_JRiPVRhx.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                                        */
import { Modal, Button } from 'flowbite-react';
import Avatar from 'react-avatar';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
export { renderers } from '../../../renderers.mjs';

function Comments({ entry }) {
  const [commentsList, setCommentsList] = useState([]);
  const [editComment, setEditComment] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [Subscription, setSubscription] = useState({ name: "", email: "" });
  const [isSubcribe, setIsSubscribe] = useState(false);
  const setLocalstorageSubscription = (e) => {
    e.preventDefault();
    if (Subscription.name != "" && Subscription.email != "") {
      localStorage.setItem("subscription", JSON.stringify(Subscription));
      setIsSubscribe(true);
    }
  };
  useEffect(() => {
    async function getcomments() {
      setCommentsList(await GetCommentsByPost(entry.databaseId));
    }
    if (typeof window != "undefined") {
      let session = localStorage.getItem("subscription");
      if (session) {
        setIsSubscribe(true);
        setSubscription(JSON.parse(session));
        getcomments();
      }
    }
    typeof window != "undefined" ? document.querySelectorAll(".postreplycommentForm").forEach((el) => el.classList.add("hidden")) : "";
  }, []);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      // Hour (e.g., 10)
      minute: "numeric",
      // Minute (e.g., 30)
      hour12: true
      // 12-hour format (AM/PM)
    }).format(date);
  };
  const ShowForm = (cls) => {
    typeof window != "undefined" ? document.querySelectorAll(".postreplycommentForm").forEach((el) => el.classList.add("hidden")) : null;
    typeof window != "undefined" ? document.querySelector("." + cls).classList.remove("hidden") : null;
  };
  const sendComment = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    if (data.comment.length > 0) {
      let input = {
        content: data.comment,
        authorName: Subscription.name,
        authorEmail: Subscription.email,
        parent: parseInt(data.parentId)
      };
      if (data.id && data.id != null) {
        await UpdateComment(data.id, input);
      } else {
        await addComment(data.postId, input);
      }
      let cmnts = await GetCommentsByPost(data.postId);
      setCommentsList(cmnts);
      ShowForm("none");
      setEditComment(null);
    }
  };
  const DeleteComments = async (id) => {
    await DeleteComment(id);
    let cmnts = await GetCommentsByPost(entry.databaseId);
    setCommentsList(cmnts);
  };
  const stripHTML = (htmlString) => {
    const doc = new DOMParser().parseFromString(htmlString, "text/html");
    return doc.body.textContent || "";
  };
  useEffect(() => {
  }, [entry, editComment]);
  return /* @__PURE__ */ jsxs("div", { children: [
    !isSubcribe ? /* @__PURE__ */ jsxs("div", { id: "subscriptionFormContainer", className: `relative my-10 mx-20 `, children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4 text-center", children: "Subscribe to Comment" }),
      /* @__PURE__ */ jsx("form", { id: "subscribeForm", className: "", onSubmit: (e) => setLocalstorageSubscription(e), children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-3 ", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-700 dark:text-white", children: "Name" }),
          /* @__PURE__ */ jsx("input", { type: "text", onChange: (e) => setSubscription({ ...Subscription, name: e.target.value }), id: "name", name: "name", className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm", required: true })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 dark:text-white", children: "Email" }),
          /* @__PURE__ */ jsx("input", { type: "email", id: "email", onChange: (e) => setSubscription({ ...Subscription, email: e.target.value }), name: "email", className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm", required: true })
        ] }),
        /* @__PURE__ */ jsx("button", { type: "submit", disabled: Subscription.name == "" || Subscription.email == "", className: "rounded-full bg-blue-500 text-white  disabled:bg-slate-500  hover:bg-blue-600 mt-5", children: "Subscribe" })
      ] }) })
    ] }) : /* @__PURE__ */ jsx("section", { id: "commentSection", className: `bg-white dark:bg-[#090b11] py-8 lg:py-16 antialiased `, children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto px-4", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-between items-center mb-6", children: /* @__PURE__ */ jsxs("h2", { className: "text-lg lg:text-2xl font-bold text-gray-900 dark:text-white", children: [
        "Discussion (",
        commentsList.length,
        ")"
      ] }) }),
      /* @__PURE__ */ jsxs("form", { className: "mb-6 postcommentForm addcommentform", onSubmit: sendComment, children: [
        /* @__PURE__ */ jsx("input", { type: "hidden", name: "postId", id: "postId", value: entry.databaseId }),
        /* @__PURE__ */ jsxs("div", { className: "py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "comment", className: "sr-only", children: "Your comment" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              id: "comment",
              name: "comment",
              rows: "6",
              className: "px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800",
              placeholder: "Write a comment...",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            className: "inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800",
            children: "Post comment"
          }
        )
      ] })
    ] }) }),
    commentsList && commentsList?.filter((c) => c.parentId == null).map(
      (c, key) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("article", { className: "p-6 text-base bg-slate-100 rounded-lg dark:bg-gray-900 mb-2", children: [
          /* @__PURE__ */ jsxs("footer", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsxs("p", { className: "inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold", children: [
                /* @__PURE__ */ jsx(Avatar, { name: c.author.node.name, size: "40", round: "50%", className: "mr-3" }),
                c.author.node.name
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: /* @__PURE__ */ jsx(
                "time",
                {
                  dateTime: c.date,
                  title: "February 8th, 2022",
                  children: formatDate(c.date)
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "actions", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: (e) => [setEditComment(c), ShowForm(`form-reply-${c.databaseId}`)],
                  className: "inline-flex items-center p-2 mr-3 text-sm font-medium text-center bg-purple-900 text-white rounded hover:bg-purple-950",
                  type: "button",
                  children: [
                    /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" }) }),
                    /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Comment settings" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: (e) => [setOpenModal(true), setEditComment(c)],
                  className: "inline-flex items-center p-2  text-sm font-medium text-center bg-purple-900 text-white rounded hover:bg-purple-950",
                  type: "button",
                  children: [
                    /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" }) }),
                    /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Comment settings" })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-dark dark:text-white", dangerouslySetInnerHTML: { __html: c.content } }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center mt-4 space-x-4", children: /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: (e) => [setEditComment(null), ShowForm(`form-reply-${c.databaseId}`)],
              className: "reply flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium",
              children: [
                /* @__PURE__ */ jsx("svg", { className: "mr-1.5 w-3.5 h-3.5", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 20 18", children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" }) }),
                "Reply"
              ]
            }
          ) }),
          /* @__PURE__ */ jsxs(
            "form",
            {
              className: `my-5  postreplycommentForm addcommentform hidden form-reply-${c.databaseId}`,
              onSubmit: sendComment,
              children: [
                /* @__PURE__ */ jsx("input", { type: "hidden", name: "postId", id: "postId", value: entry.databaseId }),
                /* @__PURE__ */ jsx("input", { type: "hidden", name: "parentId", id: "parentId", value: c.databaseId }),
                /* @__PURE__ */ jsx("input", { type: "hidden", name: "commentId", id: "commentId", value: c.databaseId }),
                /* @__PURE__ */ jsx("input", { type: "hidden", name: "id", id: "id", value: editComment ? c.id : null }),
                /* @__PURE__ */ jsxs("div", { className: "py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700", children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "comment", className: "sr-only", children: "Your reply" }),
                  /* @__PURE__ */ jsx(
                    "textarea",
                    {
                      id: "comment",
                      name: "comment",
                      rows: "2",
                      className: "px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800",
                      placeholder: "Write a comment...",
                      required: true,
                      defaultValue: editComment ? stripHTML(editComment.content) : ""
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "submit",
                    className: "inline-flex items-center py-1 px-2 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800",
                    children: "Reply comment"
                  }
                )
              ]
            }
          )
        ] }),
        c.replies.nodes.map((r, key2) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("article", { className: "p-6 mb-3 ml-6 lg:ml-12 text-base bg-slate-100 rounded-lg dark:bg-gray-900", children: [
            /* @__PURE__ */ jsxs("footer", { className: "flex justify-between items-center mb-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxs("p", { className: "inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      className: "mr-2 w-6 h-6 rounded-full",
                      src: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
                      alt: r.author.node.name
                    }
                  ),
                  r.author.node.name
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: /* @__PURE__ */ jsx("time", { dateTime: r.date, title: formatDate(r.date), children: formatDate(r.date) }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "actions ", children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: (e) => [setEditComment(r), ShowForm(`subform-reply-${r.databaseId}`)],
                    className: "inline-flex items-center p-2 mr-3 text-sm font-medium text-center bg-purple-900 text-white rounded hover:bg-purple-950",
                    type: "button",
                    children: [
                      /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" }) }),
                      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Comment settings" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: (e) => [setOpenModal(true), setEditComment(r)],
                    className: "inline-flex items-center p-2  text-sm font-medium text-center bg-purple-900 text-white rounded hover:bg-purple-950",
                    type: "button",
                    children: [
                      /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" }) }),
                      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Comment settings" })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-500 dark:text-gray-400", dangerouslySetInnerHTML: { __html: r.content } }),
            /* @__PURE__ */ jsx("div", { className: "flex items-center mt-4 space-x-4", children: /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: (e) => [setEditComment(null), ShowForm(`form-reply-${c.databaseId}`)],
                className: "reply flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium",
                children: [
                  /* @__PURE__ */ jsx("svg", { className: "mr-1.5 w-3.5 h-3.5", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 20 18", children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" }) }),
                  "Reply"
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs(
            "form",
            {
              onSubmit: sendComment,
              className: `my-5 postreplycommentForm addcommentform hidden subform-reply-${r.databaseId}`,
              children: [
                /* @__PURE__ */ jsx("input", { type: "hidden", name: "postId", id: "postId", value: entry.databaseId }),
                /* @__PURE__ */ jsx("input", { type: "hidden", name: "parentId", id: "parentId", value: c.databaseId }),
                /* @__PURE__ */ jsx("input", { type: "hidden", name: "commentId", id: "commentId", value: r.databaseId }),
                /* @__PURE__ */ jsx("input", { type: "hidden", name: "id", id: "id", value: editComment ? r.id : null }),
                /* @__PURE__ */ jsxs("div", { className: "py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700", children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "comment", className: "sr-only", children: "Your reply" }),
                  /* @__PURE__ */ jsx(
                    "textarea",
                    {
                      id: "comment",
                      name: "comment",
                      rows: "2",
                      className: "px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800",
                      placeholder: "Write a comment...",
                      required: true,
                      defaultValue: editComment ? stripHTML(editComment.content) : ""
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "submit",
                    className: "inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800",
                    children: "Reply comment"
                  }
                )
              ]
            }
          )
        ] }, r.databaseId + "-" + key2))
      ] }, c.databaseId + "-" + key)
    ),
    /* @__PURE__ */ jsxs(Modal, { show: openModal, size: "md", onClose: () => setOpenModal(false), popup: true, children: [
      /* @__PURE__ */ jsx(Modal.Header, {}),
      /* @__PURE__ */ jsx(Modal.Body, { children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx(HiOutlineExclamationCircle, { className: "mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" }),
        /* @__PURE__ */ jsx("h3", { className: "mb-5 text-lg font-normal text-gray-500 dark:text-gray-400", children: "Are you sure you want to delete this product?" }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Button, { color: "failure", onClick: (e) => [setEditComment(null), DeleteComments(editComment.id), setOpenModal(false)], children: "Yes, I'm sure" }),
          /* @__PURE__ */ jsx(Button, { color: "gray", onClick: () => setOpenModal(false), children: "No, cancel" })
        ] })
      ] }) })
    ] })
  ] });
}

const $$Astro = createAstro("https://oussamasah.github.io");
async function getStaticPaths() {
  const posts = await getAllPosts();
  return posts.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": entry.title ?? "", "description": entry.excerpt ?? "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20"> <div class="stack gap-15"> <header> <div class="wrapper stack gap-2"> <a class="back-link" href="/blog/1">${renderComponent($$result2, "Icon", $$Icon, { "icon": "arrow-left" })} Blog</a> ${renderComponent($$result2, "Hero", $$Hero, { "title": entry.title, "align": "start" }, { "default": ($$result3) => renderTemplate` <div class="details"> <div class="tags"> <!-- {entry.categories.nodes.map((t) => <Pill>{t.name}</Pill>)} --> </div> <div class="description">${unescapeHTML(entry.excerpt)}</div> </div> ` })} </div> </header> <main class="wrapper"> <div class="stack gap-10 content mb-5"> ${entry.featuredImage.node.mediaItemUrl && renderTemplate`<img${addAttribute(entry.featuredImage.node.mediaItemUrl, "src")}${addAttribute(entry.title || "", "alt")}>`} </div> <div class=" w-full">${unescapeHTML(entry.content)}</div> ${renderComponent($$result2, "Comments", Comments, { "entry": entry, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/oussema/my-headless-project/astro-project/src/pages/blog/post/Comments", "client:component-export": "default" })}</main> </div> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, {})} </div> ` })}`;
}, "/home/oussema/my-headless-project/astro-project/src/pages/blog/post/[...slug].astro", void 0);

const $$file = "/home/oussema/my-headless-project/astro-project/src/pages/blog/post/[...slug].astro";
const $$url = "/docs/blog/post/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
