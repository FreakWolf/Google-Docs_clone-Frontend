import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";

const DynamicEditor = dynamic(
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  { ssr: false }
);

function TextEditor() {
  const [editorState, setEditorState] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    setEditorState(EditorState.createEmpty());
  }, []);

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-16">
      {editorState && (
        <DynamicEditor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          toolbarClassName="flex sticky top-0 z-50 justify-center mx-auto"
          editorClassName="mt-6 p-10 bg-white shadow-lg max-w-5xl mx-auto mb-12 border"
        />
      )}
    </div>
  );
}

export default TextEditor;
