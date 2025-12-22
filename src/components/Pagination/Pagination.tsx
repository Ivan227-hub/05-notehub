import ReactPaginate from "react-paginate";

interface PaginationProps {
  pageCount: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  pageCount,
  onPageChange,
}: PaginationProps) {
  return (
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={(e) => onPageChange(e.selected + 1)}
    />
  );
}
