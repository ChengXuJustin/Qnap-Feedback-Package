// src/components/Rating.jsx
import React2 from "react";

// src/components/StarRate.jsx
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { jsx, jsxs } from "react/jsx-runtime";
var StarRate = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return /* @__PURE__ */ jsx("div", { className: "mb-10", children: /* @__PURE__ */ jsx("form", { action: "", className: "", children: [...Array(5)].map((_, index) => {
    const currentRate = index + 1;
    return /* @__PURE__ */ jsxs(
      "label",
      {
        className: "cursor-pointer",
        onMouseEnter: () => setHover(currentRate),
        onMouseLeave: () => setHover(null),
        children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "radio",
              name: "rate",
              value: currentRate,
              onChange: () => setRating(currentRate),
              className: "hidden"
            }
          ),
          /* @__PURE__ */ jsx(
            FaStar,
            {
              size: 40,
              className: `
                  transition-all duration-200
                  ${(hover || rating) >= currentRate ? "fill-Star" : "default"}
                  ${hover === currentRate ? "scale-110 shadow-md" : ""}
                `
            }
          )
        ]
      },
      index
    );
  }) }) });
};
var StarRate_default = StarRate;

// src/components/Rating.jsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var Rating = ({ listings = [] }) => {
  const renderItems = listings.map((item, index) => {
    const renderParagraph = item.description.map((question, paraDex) => {
      return /* @__PURE__ */ jsxs2("div", { children: [
        /* @__PURE__ */ jsxs2("p", { className: "mb-10", children: [
          "(",
          paraDex + 1,
          ") ",
          question
        ] }),
        /* @__PURE__ */ jsx2(StarRate_default, {})
      ] }, paraDex);
    });
    return /* @__PURE__ */ jsxs2("div", { className: "mb-20", children: [
      /* @__PURE__ */ jsxs2("h2", { className: "mb-10", children: [
        index + 1,
        ". ",
        item.title
      ] }),
      renderParagraph
    ] }, index);
  });
  return /* @__PURE__ */ jsx2("div", { className: "mb-30", children: renderItems });
};
var Rating_default = Rating;

// src/components/OpenQuestion.jsx
import React3, { useState as useState2 } from "react";
import { FaMicrophoneAlt, FaImage, FaVideo, FaTextHeight, FaTelegramPlane } from "react-icons/fa";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var open_placeholder = "Please tell us your opinion. To help you protect your privacy, please do not contain any personal information(Eg: your name or address).";
var OpenQuestion = () => {
  const [text, setText] = useState2("");
  const [method, setMethod] = useState2("");
  const [selectMethod, setSelectedMethod] = useState2("");
  const feedbackMethod = [
    {
      id: "text",
      icon: FaTextHeight
    },
    {
      id: "audio",
      icon: FaMicrophoneAlt
    },
    {
      id: "image",
      icon: FaImage
    },
    {
      id: "video",
      icon: FaVideo
    }
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { text };
    console.log(blog);
  };
  return /* @__PURE__ */ jsxs3("div", { children: [
    /* @__PURE__ */ jsx3("h2", { className: "mb-10", children: "How can we further enhance your experience?" }),
    /* @__PURE__ */ jsxs3("form", { action: "", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsx3(
        "textarea",
        {
          name: "open-question",
          id: "",
          placeholder: open_placeholder,
          className: "fw textAreah bd-rd-5 pd-10",
          onChange: (e) => setText(e.target.value)
        }
      ),
      /* @__PURE__ */ jsx3("div", { children: /* @__PURE__ */ jsx3("ul", { className: "df", children: feedbackMethod.map((methodItem, index) => {
        const Icon = methodItem.icon;
        return /* @__PURE__ */ jsx3(
          "li",
          {
            onClick: () => setSelectedMethod(feedbackMethod.id),
            className: `
                    ${selectMethod === methodItem.id}
                    ? ' pd-10 mg-r-10 bd-rd-10 method-hover-bg hover:method-hover-bg cursor-pointer '
                    : ' '
                  `,
            children: /* @__PURE__ */ jsx3(Icon, { size: 25, className: "mg-ct" })
          },
          index
        );
      }) }) }),
      /* @__PURE__ */ jsx3("div", { className: "df fw jc-fe", children: /* @__PURE__ */ jsxs3("button", { className: "sm-btn df aln-tm-ct jc-sb", children: [
        "Submit",
        /* @__PURE__ */ jsx3(FaTelegramPlane, { className: "mg-l-10" })
      ] }) })
    ] })
  ] });
};
var OpenQuestion_default = OpenQuestion;

// src/components/Practicality.jsx
import React4 from "react";
import { jsx as jsx4 } from "react/jsx-runtime";
var Practicality = () => {
  return /* @__PURE__ */ jsx4("div", { children: "Practicality" });
};
var Practicality_default = Practicality;

// src/components/Feedback.jsx
import { jsx as jsx5 } from "react/jsx-runtime";
function Feedback({ id, data }) {
  const Feedback_id = () => {
    switch (id) {
      case "openQues":
        return /* @__PURE__ */ jsx5(OpenQuestion_default, {});
      case "rating":
        return /* @__PURE__ */ jsx5(Rating_default, { listings: data });
      case "practicality":
        return /* @__PURE__ */ jsx5(Practicality_default, {});
    }
  };
  return Feedback_id();
}
export {
  Feedback
};
