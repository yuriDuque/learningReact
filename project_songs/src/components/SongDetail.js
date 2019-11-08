import React from 'react';
import { connect } from 'react-redux';

const SongDetail = props => {
  return (
    <div>Song Details</div>
  );
};

const mapStateToProp = state => {
  return { song: state.selectedSong }
}

export default connect(mapStateToProp)(SongDetail);