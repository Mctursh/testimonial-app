import React from "react";
import UtilButton from "./UtilButton";

const Article = ({imgUrl, fname, lname, comment, interaction }) => {
    return (
        <article>
            <img src={imgUrl || "chef-guy.png"} alt="chef-guy" />
            <div>
                <h2>{`${fname} ${lname}`}</h2>
                <div id="loc">
                    <p >in Ikeja</p>
                    <UtilButton value={interaction} />
                </div>
                <p id="desc">{comment || "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."}</p>
            </div>
        </article>
    )
}

export default Article