import React, { createContext, useState } from "react";

export const NoteContext = createContext();

const defaultNotes = [
	{
		id: 1,
		text: "React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.",
		label: ["all", "home"]
	},
	{
		id: 2,
		text: "If you prefer to use your own text editor, you can also download this HTML file, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos. If you prefer to use your own text editor, you can also download this HTML file, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos.",
		label: ["all", "work"]
	},
	{
		id: 3,
		text: "As your application grows, you might want to consider a more integrated setup. There are several JavaScript toolchains we recommend for larger applications. Each of them can work with little to no configuration and lets you take full advantage of the rich React ecosystem.",
		label: ["all", "personal"]
	},
	{
		id: 4,
		text: "fourth text sample",
		label: ["all", "work"]
	}
]

export const NoteProvider = ({ children }) => {
  const [inputText, setInputText] = useState("");
	const [label, setLabel] = useState(["all"]);
	const [notes, setNotes] = useState([...defaultNotes]);
	const [editMode, setEditMode] = useState(false);
	const [viewByLabel, setViewByLabel] = useState("all");
	

  return (
    <NoteContext.Provider
      value={{
        inputText,
        label,
				notes,
				editMode,
				setInputText,
				setLabel,
				setNotes,
				setEditMode,
				viewByLabel,
				setViewByLabel
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
