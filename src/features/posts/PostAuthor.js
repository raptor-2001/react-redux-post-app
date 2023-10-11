import React from 'react'
import { userSelector } from 'react-redux'

export const PostAuthor = ({ userId }) => {
  const author = userSelector((state) =>
    state.users.find((user) => user.id === userId)
  )
  return <span>by {author ? author.name : 'Unknown author'}</span>
}
