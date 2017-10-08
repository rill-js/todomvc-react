import HttpError from '@rill/error'

/**
 * Simple error handling middleware which redirects to the error page.
 */
export default async function errorHandlerMiddleware ({ res }, next) {
  try {
    await next()
  } catch (err) {
    const message = err instanceof HttpError
      ? err.message
      : 'An unknown error has occurred.'
    res.redirect(`/500?message=${message}`)
  }
}
