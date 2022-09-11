import React from "react";
import Link from '../Link';

export default function Home() {
    return (
        <div>
        <div className="BodyLight">
            <h1>
                Welcome to Lily Chiang's portfolio.
            </h1>

            <p> Virginia Tech junior majoring in Computer Science. <br/>
                Interest in software development and data analytics. <br/>
                Background in music and art. <br/>
                Enthusiastic, sincere HS math and CS tutor. <br/></p>
        </div>
        <div className="BodyDark">
            <h3>Find Me</h3>
            <Link caption="Main Github" url="https://github.com/lily-chiang" /><br />
            <Link caption="Gitlab" url="https://gitlab.com/lilyc" /><br />
            <Link caption="code.vt.edu" url="https://code.vt.edu/lilyc" /><br />
            <Link caption="LinkedIn" url="https://www.linkedin.com/in/lily-chiang-6971661b7/" /><br />
            <Link caption="Handshake" url="https://vt.joinhandshake.com/stu/users/24796386" /><br />
            <Link caption="Resume (updated Sept 2022)" url="https://docs.google.com/document/d/1qblxt7Jd5o7cf606PCasMdKvsW7yyOzZAAa0H4_mgPI/edit?usp=sharing" />
        </div>
        </div>
    );
}