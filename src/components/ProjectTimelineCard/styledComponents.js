import styled from 'styled-components/macro'

export const ProjectCardContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 7px;
  margin-bottom: 7px;
  `
export const ProjectImage = styled.img`
  width:100%;
  height:100%;
  `
export const ProjectTitleAndDurationContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: flex-start;
   @media screen and (min-width: 768px){
      flex-direction: row;
      align-items: center;
   }
   `
export const ProjectTitle = styled.h1`
  font-family:"Roboto";
  color:#171f46;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.3;
  margin: 0px;
  @media screen and (min-width: 768px){
      font-size: 25px;
    }
  `
export const DurationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center
   `
export const Duration = styled.p`
    font-family:"Roboto";
    color:#171f46;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.3;
    margin-left: 0px;
    @media screen and (min-width: 768px){
      font-size: 15px;
    }
  `
export const ProjectDescription = styled.p`
    font-family:"Roboto";
    color:#1e293b;
    font-size: 12px;
    line-height: 1.3;
    margin-top: 0px;
    @media screen and (min-width: 768px){
      font-size: 15px;
    }
    `
export const VisitLink = styled.a`
    font-family:"Roboto";
    color:#0967d2;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.3;
    margin-top: 0px;
    text-decoration:none;
    text-align:center;
    @media screen and (min-width: 768px){
      font-size: 18px;
    }`
