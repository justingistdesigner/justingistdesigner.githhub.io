import React from "react";
import "./TopNav.scss";
import { Link, useLocation } from "react-router-dom";
import RowLayout from "../Layouts/RowLayout";
import Headline from "../Text/Headline";
import { GlobalThemes } from "../../ThemeManager";
interface iNavigation {
    type: GlobalThemes;
    label: string;
    children?: iNavigation[];
}
const navigations: iNavigation[] = [
    {
        type: GlobalThemes.Resume,
        label: 'Resume'
    },
    {
        type: GlobalThemes.Gallery,
        label: 'Gallery'
    },
    {
        type: GlobalThemes.Contact,
        label: 'Contact'
    }
];
const TopNav = () => {
    let location = useLocation();
    const url = location?.pathname?.toString().slice(1, location?.pathname?.length);
    return (
        <RowLayout id="top-nav">
            {navigations.map((i) => (
                <Link
                    to={`/${i.type}`}
                    className={i.type === url ? 'selected' : ''}
                    key={i.type}
                >
                    <Headline secondary size={4}>{i.label}</Headline>
                </Link>
            ))}
        </RowLayout>
    );
};
export default TopNav;