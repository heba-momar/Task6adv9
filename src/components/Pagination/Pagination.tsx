import { useDispatch, useSelector } from "react-redux";
import { fetchAllBlogs } from "../../redux/slice";
import PaginationButton from "../PaginationButton/PaginationButton"
import type { RootState } from "../../redux/store";


const Pagination = () => {
    const dispatch = useDispatch();

    const { currentPage, totalPages } = useSelector((state:RootState) => state.blogs);

    if (totalPages <= 1) return null;

    const pageNumbers: (number | "...")[] = [];

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    pageNumbers.push(1);

    if (start > 2) pageNumbers.push("...");

    for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
    }

    if (end < totalPages - 1) pageNumbers.push("...");

    if (totalPages > 1) pageNumbers.push(totalPages);

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages && page !== currentPage) {
            dispatch(fetchAllBlogs({ page, itemsPerPage: 6 }));
        }
    };    
  return (
       <div className="flex flex-col gap-5 md:flex-row justify-between items-center  md:gap-0 mt-6 border-t border-gray03 pt-5" >

            {/* Prev */}
 <PaginationButton direction="prev" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} />

            {/* Page Numbers */}
            <div>
    {pageNumbers.map((page, index) =>
                    page === "..." ? (
                        <span key={index} className="text-gray01">...</span>
                            
                    ) : (
                        <button key={index} onClick={() => goToPage(page)}
                            className={`p-3 border-0 rounded-lg text-sm font-medium w-10 h-10 cursor-pointer 
                                ${currentPage === page ? "bg-purple02 text-pink01" : " text-gray01"}`
                            }>
                            {page}
                        </button>
                    )
                )}
            </div>

            {/* Next */}
            <PaginationButton direction="next" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} />
        </div>
  )
}

export default Pagination
