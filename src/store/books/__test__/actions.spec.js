import {
  getBooksLoading,
  getBooksSuccess,
  getBooksFailure,
  getBooks,
  BOOKS_LOADING,
  BOOKS_SUCCESS,
  BOOKS_FAILURE,
} from "../actions";

describe("getBooksLoading", () => {
  it("should return obj with certain type", () => {
    const expected = {
      type: BOOKS_LOADING,
    };

    const received = getBooksLoading();

    expect(received).toEqual(expected);
  });
});

describe("getBooksSuccess", () => {
  it("should return obj with books", () => {
    const payload = [];
    const expected = {
      type: BOOKS_SUCCESS,
      payload,
    };

    const received = getBooksSuccess(payload);

    expect(received).toEqual(expected);
  });
});

describe("getBooksFailure", () => {
  it("should return error", () => {
    const payload = "";
    const expected = {
      type: BOOKS_FAILURE,
      payload,
    };

    const received = getBooksFailure(payload);

    expect(received).toEqual(expected);
  });
});

describe("getBooks", () => {
  // Проверяем, вызывает ли getBooks диспатч с аргументом-функцией перед запросом к серверу
  it("dispatches getBooksLoading", () => {
    //Создаем фиктивную функцию для замены настоящего диспатча
    const mockDispatch = jest.fn();
    //
    getBooks()(mockDispatch);

    // Проверяем, вызывает ли getBooks диспатч с аргументом-функцией getBooksLoading
    expect(mockDispatch).toHaveBeenCalledWith(getBooksLoading());
  });

  //Проверяем, если запрос успешный, то диспатчится  функция getBooksSuccess:
  it("dispatches success action on successfull fetch", async () => {
    const result = { books: [] };
    //Создаем мок для замены настоящего запроса к серверу:
    fetch.mockResponseOnce(JSON.stringify(result));

    //Создаем фиктивную функцию для замены настоящего диспатча:
    const mockDispatch = jest.fn();

    await getBooks()(mockDispatch);

    // Проверяем, что диспатч вызвал в последний раз функцию getBooksSuccess с нужным нам результатом:
    expect(mockDispatch).toHaveBeenLastCalledWith(getBooksSuccess(result));
  });

  //Проверяем, если запрос не успешный, то диспатчится  функция getBooksFailure:
  it("dispatches failure action on error in fetch", async () => {
    // Фетчим ошибку:
    fetch.mockRejectOnce(new Error("test"));
    const mockDispatch = jest.fn();
    await getBooks()(mockDispatch);
    // Проверяем, что диспатч вызвал в последний раз функцию getBooksFailure с ошибкой:
    expect(mockDispatch).toHaveBeenLastCalledWith(getBooksFailure("test"));
  });
});

it("throws error", () => {
  expect(() => foo()).toThrow();
});
