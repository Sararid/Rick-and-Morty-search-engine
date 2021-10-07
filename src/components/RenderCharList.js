import { Link } from "react-router-dom";
import RenderCharDetails from "./RenderCharDetails";
import "../styles/layout/RenderCharList.scss";
import CharNotFound from "./CharNotFound";

const RenderCharList = (props) => {
    if (props.data.length === 0) {
        return <CharNotFound />;
    } else {
        const listHtml = props.data.map((char) => (
            <li key={char.id} className="wrapper__listChar">
                <Link to={`/character/${char.id}`} className="mainWrapper__link">
                    <RenderCharDetails char={char} />
                </Link>
            </li>
        ));

        return (
            <section className="mainWrapper">
                <ul className="wrapper"> {listHtml}</ul>
            </section>
        );
    }
};

export default RenderCharList;
