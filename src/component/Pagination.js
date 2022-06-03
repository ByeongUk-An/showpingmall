import styled from "styled-components";

function Pagination({ total, limit, currentPage, setCurrentPage }) {
    const numPages = Math.ceil(total / limit);

    return (
        <>
            <Nav>
                <Button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                    &lt;
                </Button>
                {Array(numPages)
                    .fill()
                    .map((_, i) => (
                        <Button
                            key={i + 1}
                            onClick={() => setCurrentPage(i + 1)}
                            aria-current={currentPage === i + 1 ? "page" : null}
                        >
                            {i + 1}
                        </Button>
                    ))}
                <Button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === numPages}>
                    &gt;
                </Button>
            </Nav>
        </>
    );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  width: 35px;
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: #FAFAFA;
  color: black;
  font-size: 1rem;

  &:hover {
    background: #337AB7;
    color:white;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: #337AB7;
    font-weight: bold;
    cursor: revert;
    transform: revert;
    color:white;
  }
`;

export default Pagination;