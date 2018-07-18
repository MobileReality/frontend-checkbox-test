/**
 * Created by Bartlomiej Rutkowski on 26.10.17.
 */
export function createAsyncActionConstants(action) {
    return {
        PENDING: `${action}_PENDING`,
        FULFILLED: `${action}_FULFILLED`,
        REJECTED: `${action}_REJECTED`
    };
}