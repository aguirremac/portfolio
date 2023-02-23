import AnchorLink from "react-anchor-link-smooth-scroll";
import { NavOptions } from "../../shared/types";

type Props = {
page: string;
selectedPage: NavOptions;
setSelectedPage: (value: NavOptions) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
const lowerCasePage = page.toLowerCase().replace(/ /g, "") as NavOptions;
console.log(lowerCasePage);


return (
    <AnchorLink className={`
        ${selectedPage === lowerCasePage ? "text-[#39709B]" : ""}  transition duration-500 hover:text-blue-400`} 
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
    >   {page}
    </AnchorLink>
);
};

export default Link;


