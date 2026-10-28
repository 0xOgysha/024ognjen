"use client";

import "@/styles/OgyAssistant.css";


import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";

const initialMessage = {
  sender: "ogy",
  text: "Hi. I'm Ogy — Ognjen's portfolio assistant. Ask me about his projects, skills, background or contact information.",
};

const quickCommands = [
  "/projects",
  "/skills",
  "/about",
  "/contact",
];

export default function OgyAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    initialMessage,
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  /*
    AUTO SCROLL
  */

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  /*
    FOCUS INPUT
  */

  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 250);

    return () => clearTimeout(timer);
  }, [isOpen]);

  /*
    ESC CLOSE
  */

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  /*
    SCROLL TO SECTION
  */

  function scrollToSection(id) {
    const section = document.querySelector(id);

    if (!section) return;

    setIsOpen(false);

    setTimeout(() => {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 250);
  }

  /*
    PROJECT LIST
  */

  function getProjectList() {
    return projects
      .map(
        (project) =>
          `${project.title} (${project.status})`
      )
      .join(", ");
  }

  /*
    OGY BRAIN V1
  */

  function createResponse(message) {
    const text = message
      .toLowerCase()
      .trim();

    /*
      COMMANDS
    */

    if (
      text === "/projects" ||
      text === "projects"
    ) {
      return {
        text:
          `Ognjen currently showcases ${projects.length} projects: ${getProjectList()}.`,

        action: {
          label: "VIEW PROJECTS",
          target: "#projects",
        },
      };
    }

    if (
      text === "/skills" ||
      text === "skills"
    ) {
      return {
        text:
          "Ognjen works with JavaScript, HTML, CSS, Bootstrap, React, Next.js, SQL, Supabase, Git and GitHub.",

        action: {
          label: "VIEW SKILLS",
          target: "#about",
        },
      };
    }

    if (
      text === "/about" ||
      text === "about"
    ) {
      return {
        text:
          "Ognjen is a developer based in Belgrade, Serbia. He builds web applications, personal projects and digital products.",

        action: {
          label: "ABOUT OGNJEN",
          target: "#about",
        },
      };
    }

    if (
      text === "/contact" ||
      text === "contact"
    ) {
      return {
        text:
          "You can contact Ognjen at ognjensanjta@gmail.com or use the contact section of this portfolio.",

        action: {
          label: "CONTACT",
          target: "#contact",
        },
      };
    }

    /*
      PROJECTS
    */

    if (
      text.includes("sladoled") ||
      text.includes("ice cream")
    ) {
      return {
        text:
          "Anđini sladoledi is a web platform for an ice cream business. It includes product management, availability controls, live location information, an admin dashboard and an interactive assistant.",

        project: "andjini-sladoledi",
      };
    }

    if (
      text.includes("kolač") ||
      text.includes("kolac") ||
      text.includes("cake") ||
      text.includes("anđa") ||
      text.includes("andja")
    ) {
      return {
        text:
          "Anđa i kolači is a web platform for a confectionery business, featuring product management, availability controls, an admin dashboard, customer contact functionality and Supabase integration.",

        project: "andja-i-kolaci",
      };
    }

    if (
      text.includes("among") ||
      text.includes("multiplayer")
    ) {
      return {
        text:
          "AmongMP is a multiplayer server project featuring custom gameplay systems, player roles, server-side logic and database integration.",

        project: "amongmp",
      };
    }

    /*
      TECHNOLOGIES
    */

    if (
      text.includes("technology") ||
      text.includes("technologies") ||
      text.includes("tech stack") ||
      text.includes("stack") ||
      text.includes("programming") ||
      text.includes("tehnolog")
    ) {
      return {
        text:
          "His current portfolio stack includes JavaScript, React, Next.js, HTML, CSS, Bootstrap, SQL, Supabase, Git and GitHub.",

        action: {
          label: "VIEW SKILLS",
          target: "#about",
        },
      };
    }

    /*
      ABOUT
    */

    if (
      text.includes("who is ognjen") ||
      text.includes("ko je ognjen") ||
      text.includes("about ognjen")
    ) {
      return {
        text:
          "Ognjen is a developer based in Belgrade, Serbia, focused on building web applications and experimenting with digital products.",

        action: {
          label: "MORE ABOUT OGNJEN",
          target: "#about",
        },
      };
    }

    /*
      EMAIL
    */

    if (
      text.includes("email") ||
      text.includes("e-mail") ||
      text.includes("mail") ||
      text.includes("kontakt")
    ) {
      return {
        text:
          "You can reach Ognjen at ognjensanjta@gmail.com.",

        email: true,
      };
    }

    /*
      GITHUB
    */

    if (text.includes("github")) {
      return {
        text:
          "You can find Ognjen's work and repositories on GitHub.",

        external: {
          label: "OPEN GITHUB",
          href: "https://github.com/0xOgysha",
        },
      };
    }

    /*
      INSTAGRAM
    */

    if (text.includes("instagram")) {
      return {
        text:
          "You can find Ognjen on Instagram as @ognjjen_s.",

        external: {
          label: "OPEN INSTAGRAM",
          href: "https://instagram.com/ognjjen_s",
        },
      };
    }

    /*
      LINKEDIN
    */

    if (text.includes("linkedin")) {
      return {
        text:
          "You can also connect with Ognjen on LinkedIn.",

        external: {
          label: "OPEN LINKEDIN",
          href:
            "https://www.linkedin.com/in/ognjensanjta/",
        },
      };
    }

    /*
      GENERAL PROJECT QUESTION
    */

    if (
      text.includes("project") ||
      text.includes("work") ||
      text.includes("projek")
    ) {
      return {
        text:
          `There are currently ${projects.length} featured projects in the portfolio: ${getProjectList()}.`,

        action: {
          label: "EXPLORE PROJECTS",
          target: "#projects",
        },
      };
    }

    /*
      GREETING
    */

    if (
      text.includes("hello") ||
      text === "hi" ||
      text.includes("hey") ||
      text.includes("zdravo") ||
      text.includes("ćao") ||
      text === "cao"
    ) {
      return {
        text:
          "Hey. I'm Ogy. I can tell you about Ognjen, his projects, technologies or how to contact him.",
      };
    }

    /*
      UNKNOWN
    */

    return {
      text:
        "I don't have an answer for that yet. Try asking about Ognjen's projects, skills, background or contact information.",
    };
  }

  /*
    SEND MESSAGE
  */

  function sendMessage(customMessage) {
    const message =
      customMessage ?? input.trim();

    if (!message || isTyping) return;

    const userMessage = {
      sender: "user",
      text: message,
    };

    setMessages((current) => [
      ...current,
      userMessage,
    ]);

    setInput("");
    setIsTyping(true);

    const response =
      createResponse(message);

    const delay = 750;

    setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          sender: "ogy",
          ...response,
        },
      ]);

      setIsTyping(false);
    }, delay);
  }

  function handleSubmit(event) {
    event.preventDefault();

    sendMessage();
  }

  /*
    UI
  */

  return (
    <>
      <div
        className={`ogy-panel ${
          isOpen
            ? "ogy-panel-open"
            : ""
        }`}
      >
        {/* HEADER */}

        <div className="ogy-header">
          <div className="ogy-identity">
            <div className="ogy-logo">
              O
            </div>

            <div>
              <strong>
                OGY
              </strong>

              <span>
                PORTFOLIO ASSISTANT
              </span>
            </div>
          </div>

          <button
            type="button"
            className="ogy-close"
            onClick={() =>
              setIsOpen(false)
            }
            aria-label="Close Ogy"
          >
            ×
          </button>
        </div>

        {/* STATUS */}

        <div className="ogy-status">
          <span></span>

          ONLINE / LOCAL V1
        </div>

        {/* MESSAGES */}

        <div className="ogy-messages">
          {messages.map(
            (message, index) => (
              <div
                className={`ogy-message ogy-message-${message.sender}`}
                key={`${message.sender}-${index}`}
              >
                {message.sender ===
                  "ogy" && (
                  <span className="ogy-message-label">
                    OGY / 024
                  </span>
                )}

                <div className="ogy-message-content">
                  {message.text}
                </div>

                {/* INTERNAL ACTION */}

                {message.action && (
                  <button
                    type="button"
                    className="ogy-message-action"
                    onClick={() =>
                      scrollToSection(
                        message.action.target
                      )
                    }
                  >
                    {
                      message.action
                        .label
                    }

                    <span>
                      →
                    </span>
                  </button>
                )}

                {/* PROJECT */}

                {message.project && (
                  <a
                    href={`/projects/${message.project}`}
                    className="ogy-message-action"
                  >
                    VIEW PROJECT

                    <span>
                      ↗
                    </span>
                  </a>
                )}

                {/* EMAIL */}

                {message.email && (
                  <a
                    href="mailto:ognjensanjta@gmail.com"
                    className="ogy-message-action"
                  >
                    SEND EMAIL

                    <span>
                      ↗
                    </span>
                  </a>
                )}

                {/* EXTERNAL LINK */}

                {message.external && (
                  <a
                    href={
                      message.external
                        .href
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="ogy-message-action"
                  >
                    {
                      message.external
                        .label
                    }

                    <span>
                      ↗
                    </span>
                  </a>
                )}
              </div>
            )
          )}

          {/* TYPING */}

          {isTyping && (
            <div className="ogy-message ogy-message-ogy">
              <span className="ogy-message-label">
                OGY / 024
              </span>

              <div className="ogy-typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}

          <div
            ref={messagesEndRef}
          ></div>
        </div>

        {/* QUICK COMMANDS */}

        <div className="ogy-commands">
          {quickCommands.map(
            (command) => (
              <button
                type="button"
                key={command}
                onClick={() =>
                  sendMessage(command)
                }
                disabled={isTyping}
              >
                {command}
              </button>
            )
          )}
        </div>

        {/* INPUT */}

        <form
          className="ogy-input-area"
          onSubmit={handleSubmit}
        >
          <span className="ogy-input-prefix">
            &gt;
          </span>

          <input
            ref={inputRef}
            value={input}
            onChange={(event) =>
              setInput(
                event.target.value
              )
            }
            placeholder="Ask Ogy something..."
            autoComplete="off"
            maxLength={150}
          />

          <button
            type="submit"
            disabled={
              !input.trim() ||
              isTyping
            }
            aria-label="Send message"
          >
            ↑
          </button>
        </form>

        {/* FOOTER */}

        <div className="ogy-footer">
          <span>
            024/OGY
          </span>

          <span>
            V1.0
          </span>
        </div>
      </div>

      {/* FLOATING BUTTON */}

    <div
        className={`ogy-trigger-wrapper ${
            isOpen ? "ogy-is-open" : ""
        }`}
    >
    <div className="ogy-peeker" aria-hidden="true">
        <div className="ogy-peeker-antenna"></div>

        <div className="ogy-peeker-face">
        <div className="ogy-peeker-eye ogy-peeker-eye-left">
            <span></span>
        </div>

        <div className="ogy-peeker-eye ogy-peeker-eye-right">
            <span></span>
        </div>
        </div>
    </div>

    <button
            type="button"
            className={`ogy-trigger ${
            isOpen ? "ogy-trigger-active" : ""
            }`}
            onClick={() =>
            setIsOpen(
                (current) => !current
            )
            }
            aria-label="Open Ogy assistant"
        >
        <span className="ogy-trigger-status">
        <i></i>
        </span>

        <span className="ogy-trigger-name">
        OGY
        </span>

        <span className="ogy-trigger-number">
        /024
        </span>
    </button>
    </div>
    </>
  );
}