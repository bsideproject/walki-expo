import { gql, useQuery } from "@apollo/client";
import { getMember } from "../__generated__/getMember";

const GET_MEMBER_QUERY = gql`
  query getMember {
    getMember {
      id
      social
      socialId
      name
      profileImage
      coach {
        id
        name
        description
      }
    }
  }
`;

export const useMe = () => {
  return useQuery<getMember>(GET_MEMBER_QUERY);
};
