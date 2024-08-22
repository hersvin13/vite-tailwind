import React from 'react'
import { MainLayout } from '../main-layout'
import { RouteObject } from 'react-router-dom'

const routerLayout = (
  Component: React.FC,
  Layout: React.FC<{ children: React.ReactNode }>
) => {
  return () => (
    <MainLayout>
      <Layout>
        <Component />
      </Layout>
    </MainLayout>
  )
}

const createRoutesWithLayout = (
  routes: { path: string; component: React.FC }[],
  Layout: React.FC<{ children: React.ReactNode }>
): RouteObject[] => {
  return routes.map(({ path, component }) => ({
    path,
    element: React.createElement(routerLayout(component, Layout)),
  }))
}

export { routerLayout, createRoutesWithLayout }
