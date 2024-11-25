import ErrorPage from "../../components/common/error-page/ErrorPage";

const NotFoundPage = () => {
  return (
    <ErrorPage
      title={"Page Not Found"}
      description={"Check that the url is correct"}
    />
  );
};

export default NotFoundPage;
