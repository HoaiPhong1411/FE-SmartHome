import React from "react";
import { Link } from "react-router-dom";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";

const BreadCrumb = ({ breadcrumbs }) => {
    return;
    <div>
        {breadcrumbs.map(({ breadcrumb, match }, index) => (
            <div className="" key={match.url}>
                <Link to={match.url || ""}>{breadcrumb}</Link>
            </div>
        ))}
    </div>;
};

export default BreadCrumb;
