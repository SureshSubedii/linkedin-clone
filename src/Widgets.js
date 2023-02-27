import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import'./Widgets.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const newsArticle=(heading,subtitle)=>(
        <div className="widget_articles">
            <div className="widget_articlesLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widget_articlesRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className="widgets">
        <div className="widgets_headers">
            <h2>LinkedIn News</h2>
            <InfoIcon/>
        </div>
        {newsArticle("He who should not be named is back","Top news - 645645 readers")}
        {newsArticle("Terrors among Ukranians","BBC - 543454 readers")}
        {newsArticle("DogeCoin breaks record"," Crypto- 78676 readers")}
        {newsArticle("Hogwart lecagacy breaks internet","Tech & games - 98677 readers")}
        {newsArticle("The rise of a new virus. Is humanity doomed?","World news - 98677 readers")}
        {newsArticle("100 foods you should avoid","Health & Hygiene - 6754 readers")}

    </div>
  )
}

export default Widgets