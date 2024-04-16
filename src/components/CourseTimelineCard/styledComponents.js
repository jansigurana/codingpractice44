import styled from 'styled-components/macro'

export const CourseTitleAndDuratuionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:flex-start;
  width:100%;
  @media screen and (min-width: 768px) {
    flex-direction: row
    align-items: center;
  }
`
export const CourseTitle = styled.h1`
  font-family:"Roboto"
  font-size:16px;
  font-weight:600;
  line-height:1.2;
  color:#171f4646;
  margin:0px;
  @media screen and (min-width: 768px) {
     font-size:24px;
  }
export const DurationContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`
export const Duration = styled.p`
  font-family:"Roboto"
  font-size:13px;
  line-height:1.2;
  color:#1e293b;
  margin-top:0px;
  @media screen and (min-width: 768px) {
     font-size:17px;
  } 
`
export const CourseTagsList = styled.ul`
  display:flex;
  flex-wrap:wrap;
  align-items: center;
  padding: 0px;
  margin: 0px;
`
export const CourseTagItem = styled.li`
  list-style-type: none;
`
export const CourseTag = styled.p`
  font-family:"Roboto"
  font-size:10px;
  line-height:1.3;
  color:#25262c;
  margin:0px;
  background-color:white;
  padding: 4px 8px;
  margin-bottom:8px;
  margin-right:8px;
  @media screen and (min-width: 768px) {
     font-size:12px;
     font-weight: 600;
  } 
`