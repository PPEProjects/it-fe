import {useEffect, useState} from "react";

export const StepsEnum = ['Preparing', 'Onboard', 'Running', 'Done']

/**
 * @param current { String }
 * @constructor
 */
function StepsView({ current }) {
  const _current = StepsEnum.indexOf(current)

  return (
    <div>ok</div>
  )

}
