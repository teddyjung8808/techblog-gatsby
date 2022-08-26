import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const ProfileImage: FunctionComponent = () => {
  return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />
}

export default ProfileImage

const PROFILE_IMAGE_LINK =
  'https://media.istockphoto.com/photos/image-of-open-antique-book-on-wooden-table-with-glitter-overlay-picture-id873507500?b=1&k=20&m=873507500&s=170667a&w=0&h=jHslAXdeW5Ob6D9I0zyiLGChrluxKg2S35Z_SHS_Kfc='

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;
`
