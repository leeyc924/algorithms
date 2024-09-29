/**
 * Response body of PUT /score
 */
export interface ScoreResponse {
  /**
   * 정확성 점수
   */
  accuracy_score: number;
  /**
   * 효율성 점수
   */
  efficiency_score: number;
  /**
   * 페널티 점수
   */
  penalty_score: number;
  /**
   * 총점
   */
  score: number;
}
