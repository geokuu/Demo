import Wrapper from "../assets/wrappers/Categories.js";
import data from "../assets/data.js";

const Categories = () => {
  return (
    <Wrapper>
      <h2>Categories</h2>

      <div className="buttonsContainer">
        {data.categories.map(function (data) {
          return (
            <a className="btn btn2" key={data} href="/demo/">
              {data}
            </a>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Categories;
