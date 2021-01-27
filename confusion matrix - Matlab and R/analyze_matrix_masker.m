% authors: Devin McAuley, Toni Smith, Yan Cong

function res = spin_analyze_masker041420(subj,nblocks,ntrials,n_colors)

% Input: raw .mat data file for one subject, number of experiment blocks for that
% participant, number of trials per block, and the number of possible
% colors

% Output: 4 x 4 response confusion matrix for the masker

% Note: in raw data blue = 0, red = 1, white = 2, green = 3

cm_masker = zeros(n_colors,n_colors);


% Count times each color appeared as the masker, independently for each target 
color_count = zeros(n_colors);

for i = 1:nblocks

    % db is the data for a single block
    db = subj.data(i);
    resp_mat = db.track_resp;      

    for j = 1:ntrials         

        % Color & number coded starting at 0 - changing to start at 1 for
        % matrix organization purposes
        % For each trial extracting the target, masker, and response
        
        % target_color = db.track_stimobj(j).target_color + 1;

        masker_color = db.track_stimobj(j).masker_color + 1;

        resp_color = resp_mat(j,1)+1;

        % count responses and masker color only for the trials where
        % the target color was t
      
        color_count(masker_color) = color_count(masker_color) + 1;

        cm_masker(masker_color, resp_color) = cm_masker(masker_color,resp_color)+ 1;
          
    end     
end

% For each of the different masker colors, divide the row corresponding
% to that color by the number of times that color masker occurred with
% the current target color
for m = 1:length(color_count)

        cm_masker(m, 1:n_colors) = cm_masker(m, 1:n_colors) / color_count(m);
      
end            

res = cm_masker;

end
