import {DeleteTaskUseCase} from './../delete-task-use-case'


const createFeedSpy = jest.fn()
const deleteFeedSpy = jest.fn()

const deleteTaskUseCase = new DeleteTaskUseCase({
  create: createFeedSpy,
  delete: deleteFeedSpy
})

describe('testing delete use case'  , ()=> {
  it('should verify if the id is provided, return error' , async ()=> {
    await expect(deleteTaskUseCase.execute({
      id:''
    })).rejects.toThrow()
  })
})