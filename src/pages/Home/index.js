import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { getMovieList } from '../../redux/actions/actions';
import styled from 'styled-components';
import Search from '../../components/Search';
const StyledDiv = styled.div`
display:inline-block;
 background-color: #000;
 color: #fff;
 li{
	width: 23%;
	padding-left: 30px;
	.MuiImageListItemBar-title{
		padding: 8px 0 10px;
        font-size: 14px;
	}
 }
`;

class Home extends Component {
	constructor(props) {
		super(props);
		this.state= {currentPage: 1};
		this.handleScroll = this.handleScroll.bind(this);
		this.searchResults = this.searchResults.bind(this);
	  }
	componentDidMount() {
	 window.addEventListener('scroll', this.handleScroll);
	}
	componentWillMount() {
		this.props.getMovieList({currentPage: this.state.currentPage});
	}
	handleScroll() {
		if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
		  if (this.state.currentPage < 3) {
			this.setState((prevState) => ({ 
				currentPage: prevState.currentPage + 1 
			 }))
		  } else if (this.state.currentPage === 3) {
			this.setState((prevState) => ({ 
				currentPage: 1 
			 }))
		  }
			this.props.getMovieList({currentPage: this.state.currentPage});
			window.scrollTo({ top:0, behavior:'smooth' });
		}
	  }
	  searchResults(searchVal) {
			this.props.getMovieList({currentPage: this.state.currentPage, searchValue: searchVal});
	  }

	render() {
		const { movies } = this.props;
		let items = [];
		if (typeof movies !== 'undefined') {
			<ImageList cols={3}>
				{
					items = movies.map((item) => (
						<ImageListItem key={item.poster_image} cols={3}>
						<img
							src={item.poster_image.includes('posterthatismissing') ? `/Slices/placeholder_for_missing_posters.png` : `/Slices/${item.poster_image}`}
							alt={item.poster_image}
							loading="lazy"
						/>
						<ImageListItemBar position="below" title={item.name} />
						</ImageListItem>
				))}
			 </ImageList>
		}
		return(
			<StyledDiv>
			<Search searchResults={this.searchResults}/>
			<div>{items}</div>
			</StyledDiv>
		);
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		getMovieList: payload => {
			dispatch(getMovieList(payload));
		}
	};
};
const mapStateToProps = state => {
	return {
		movies: state.reducer &&  state.reducer.length > 0 ? state.reducer[0] : []
	};
};

Home.propTypes = {
	dispatch: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
