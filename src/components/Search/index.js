import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
 background-color: #000;
 display: flex;
 padding: 30px 5px 30px 5px;
 .backIcon {
	left: 25px;
    position: relative;
    width: 20px;
 }
 input {
	width: 72%;
    position: relative;
    left: 30px;
    background-color: #000;
    color: #fff;
    border-color: #000;
 }
 .searchIcon {
	position: relative;
    left: 35px;
 }
`;
const Search = (props) => {
	return (
		<StyledDiv>
			<img
			    class="backIcon"
				src={`/Slices/Back.png`}
				alt="back"
				loading="lazy"
			/>
			<input type="text" placeholder="Romantic Comedy" onKeyPress = {(e) => {props.searchResults(e.target.value)}} />
			<img
			    class="searchIcon"
				src={`/Slices/search.png`}
				alt="search"
				loading="lazy"
				width="20px"
			/>
		</StyledDiv>
	);
};

export default Search;
