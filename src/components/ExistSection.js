import { Icon } from "@material-ui/core";
import React from "react";

function ExistSection() {
    return (
        <section className="bg-white px-10 md:px-0">
            <div className="max-w-3xl mx-auto py-8 text-sm text-gray-700">
                <div className="flex items-center justify-between pb-5">
                    <h2 className="font-medium flex-grow" style={{ color: "#202124", fontFamily: "Google Sans,Roboto,Arial,sans-serif", fontSize: "16px" }}>My Documents</h2>
                    <p className="mr-12">Date Created</p>
                    <Icon className="text-gray-500">folder</Icon>
                </div>
            </div>
        </section>
    )
}

export default ExistSection