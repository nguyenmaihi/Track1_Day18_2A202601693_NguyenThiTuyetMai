export type Learner = {
  id: string
  name: string
  initials: string
  topic: string
  timeOnSlide: string
  revisited: number
  markedUnclear: boolean
  answerChanges: number
  aiChat: string | null
  possibleDifficulty: string
  priority?: 'High' | 'Medium'
  confidence?: 'Medium' | 'Low'
}

export const learners: Learner[] = [
  {
    id: 'linh', name: 'Lê Thị Linh', initials: 'LL', topic: 'Thiết lập môi trường',
    timeOnSlide: '8m20s', revisited: 3, markedUnclear: true, answerChanges: 2,
    aiChat: 'Tại sao pip install của mình bị lỗi?', possibleDifficulty: 'Cài đặt thư viện',
    priority: 'High', confidence: 'Medium',
  },
  {
    id: 'minh-anh', name: 'Trần Minh Anh', initials: 'MA', topic: 'Môi trường ảo',
    timeOnSlide: '6m10s', revisited: 2, markedUnclear: false, answerChanges: 1,
    aiChat: null, possibleDifficulty: 'Khái niệm môi trường ảo', priority: 'Medium', confidence: 'Low',
  },
  {
    id: 'hoang-nam', name: 'Nguyễn Hoàng Nam', initials: 'HN', topic: 'Cài đặt thư viện',
    timeOnSlide: '3m15s', revisited: 1, markedUnclear: false, answerChanges: 0,
    aiChat: null, possibleDifficulty: 'Cài đặt thư viện',
  },
  {
    id: 'thu-ha', name: 'Phạm Thu Hà', initials: 'TH', topic: 'Trình thông dịch Python',
    timeOnSlide: '5m40s', revisited: 2, markedUnclear: true, answerChanges: 3,
    aiChat: 'VS Code không nhận Python interpreter', possibleDifficulty: 'Cấu hình trình thông dịch Python',
    priority: 'High', confidence: 'Medium',
  },
]

export const supportQueue = ['linh', 'thu-ha', 'minh-anh']
export const interventionSuggestions = ['linh', 'thu-ha']

export const defaultMessage = (learner: Learner) =>
  `Chào ${learner.name.split(' ').at(-1)}, mình thấy bạn có thể đang gặp khó khăn ở phần ${learner.topic}.\n\nBạn có muốn Lab Coach hỗ trợ không?`
