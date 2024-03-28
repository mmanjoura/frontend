
import axios from "axios";
import React from "react";
import Constants from "@/utils/constants";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const useCommentsData = () => {

  const [comments, setComments] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${Constants.baseURL}/comments`).then((response) => {
      setComments(response.data);
    });
  }, []);
  return comments;
}

export const useCommentData = (id) => {

  const [comment, setComment] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${Constants.baseURL}/comments/`+ id).then((response) => {
      setComment(response.data);
    });
  }, []);
  return comment;
}

