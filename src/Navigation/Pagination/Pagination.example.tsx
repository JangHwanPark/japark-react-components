import Pagination from './Pagination';

const PaginationExample = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#0f1214] text-background">
      <div className="w-full flex flex-col">
        <Pagination count={10} />
        <Pagination count={10} color="primary" />
        <Pagination count={10} color="secondary" />
        <Pagination count={10} disabled />
        <Pagination count={10} hidden />
      </div>
    </div>
  );
};

export default PaginationExample;