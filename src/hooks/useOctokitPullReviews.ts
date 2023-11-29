import { useState, useEffect } from 'react';
import { getOctokit } from '../utils/get-octokit';
import { FullReview, Review } from '../types/review';

export const useOctokitPullReviews = (
  repoName: string,
  pullNumber: number,
): Review[] => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const onLoad = async () => {
      await getOctokit()
        .request('GET /repos/{org}/{repo}/pulls/{pull_number}/reviews', {
          org: import.meta.env.VITE_GITHUB_OWNER,
          repo: repoName,
          pull_number: pullNumber,
        })
        .then(({ data }) => {
          const reviewData = data.map((review: FullReview) => ({
            author: review?.user?.login,
            authorAvatar: review?.user?.avatar_url,
            submittedDate: review?.submitted_at,
          }));
          setReviews(reviewData);
        })
        .catch((err) => console.log(err));
    };
    if (repoName !== '' && pullNumber !== undefined) {
      onLoad();
    }
  }, [repoName, pullNumber]);
  return reviews;
};
