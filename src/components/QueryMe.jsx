import React, { useEffect } from 'react';
import { apolloClient } from 'services';
import gql from 'graphql-tag';
import { Route, Navigate } from 'react-router-dom';

export const QueryMe = () => {
  const project_manage = { project_manage: 'project_manage' };

  useEffect(() => {
    (async () => {
      const query = gql`
        query Me {
          me {
            id
            name
            email
            first_name
            phone_number
            gender
            allPosition
            date_of_birth
            avatar_attachment
            background_attachment
            userAdvance {
              goal
              plan
              language
              roles
            }
            userFeedback {
              grate
            }
            selfProject {
              id
              name
              type
            }
            joinProject {
              id
              project {
                name
              }
              position
            }
            numberSelfProject
            numberJoinedProject
          }
        }
      `;
      const res = await apolloClient.query({
        query,
      });
      // window.dispatchEvent(new CustomEvent('user', res));
    })();
  }, []);
  return <></>;
};
