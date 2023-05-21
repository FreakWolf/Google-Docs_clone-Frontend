import React, { useState } from "react";
import { useRouter } from "next/router";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Image from "next/image";
import { Button } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import "@material-ui/core/Modal";

function CreateSection() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState("");

  const createDocument = () => {
    if (!input) return;

    setInput("");
    setShowModal(false);

    router.push(`/doc/[id].js]`);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      createDocument();
    }
  };

  return (
    <section className="bg-[#f8f9fa] pb-10 px-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex item-center justify-between py-6">
          <h2 className="text-gray-700" style={{ fontFamily: "Google Sans, Roboto, Arial, sans-serif", fontSize: "16px", fontWeight: 400, flexGrow: 1, marginLeft: "8px" }}>Start a new document</h2>
          <button className='focus:outline-none bg-transparent md:inline-flex ml-5 md:ml-20'>
            <MoreVertIcon className='text-gray' style={{ fontSize: "1.5rem", color: "#5f6368" }} />
          </button>
        </div>
        <div>
          <div onClick={() => setShowModal(true)} className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700">
            <Image src='https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png' layout='fill' />
          </div>
          <p className="ml-2 mt-2 font-semibold text-sm text-gray-700">Blank</p>
        </div>
      </div>

      <Modal open={showModal} onClose={closeModal}  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="outline-none" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="outline-none w-full mb-4 p-2 rounded"
            placeholder="Enter name of document..."
            onKeyDown={handleEnterKey}
          />
          <div className="flex justify-between">
            <Button className="cancel-button mr-2" color="primary" onClick={closeModal}>
              Cancel
            </Button>
            <Button className="create-button" color="primary" onClick={createDocument} variant="contained">
              Create
            </Button>
          </div>
        </div>
      </Modal>
    </section>
  );
}

export default CreateSection;
