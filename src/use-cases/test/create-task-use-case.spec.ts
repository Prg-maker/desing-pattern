import {CreateTaskUseCase} from '../create-task-use-case'

const createFeedSpy = jest.fn()
const deleteFeedSpy = jest.fn()

const createTaskUseCase = new CreateTaskUseCase({
  create: createFeedSpy,
  delete: deleteFeedSpy
})


describe('testing to create use case'  , ()=> {
  it('should verify if title is provided' , async ()=> {
    await expect(createTaskUseCase.execute({
      title:"",
      description:"fake_description"
    })).rejects.toThrow()
    
  })

  it('should verify if description is provided' , async ()=> {
    await expect(createTaskUseCase.execute({
      title:"fake_description",
      description:""
    })).rejects.toThrow()

  })

  it('should create one task' , async ()=> {
    await expect(createTaskUseCase.execute({
      title:"fake_title_spy",
      description: "fake_description_spy"
    })).resolves.not.toThrow()
  })


})