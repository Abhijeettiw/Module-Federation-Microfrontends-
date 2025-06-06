import React, { lazy, Suspense } from 'react'

const Child = lazy(()=>import('Child/Source'))

function ChildApp() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
        <Child/>
    </Suspense>
  )
}

export default ChildApp