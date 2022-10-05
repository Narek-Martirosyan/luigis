import "./linkToTags.scss";

export const LinkToTags = () => {
    return (
        <div>
            <span className="menu styled-title">
                Menu
                <span className="parent-menu">
                    <a href="#pizza" className="goTo">Pizza</a>
                    <a href="#salad" className="goTo">Salad</a>
                    <a href="#Sandwiches_and_Burgers" className="goTo">Sandwiches and Burgers</a>
                    <a href="#drinks" className="goTo">Drinks</a>
                    <a href="#calzone" className="goTo">Calzone</a>
                    <a href="#rolls" className="goTo">Rolls</a>
                    <a href="#appetizers" className="goTo">Appetizers</a>
                    <a href="#soups" className="goTo">Soups</a>
                    <a href="#pasta" className="goTo">Pasta</a>
                </span>
            </span>
        </div>
    )
}